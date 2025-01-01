import {  PrismaClient } from "@prisma/client";
import express from "express";
const prisma = new PrismaClient();
const router = express.Router();

// Create a new blog
router.post("/blogs", async (req, res) => {
    const { header, products, footer , accessToken} = req.body;

    if(accessToken != "d]JG2t'~Anr^'yy)2nZWhXtU"){
      res.status(401).json({
        error:"Unauthorized"
      })
      return ;
    }
    // Validate required fields
    if (!header || !products || !footer) {
      res.status(400).json({ error: "Invalid request. Missing fields." });
      return;
    }
  
    // Validate header
    const { icon, title, image, publishDate, readTime, sections } = header;
    if (!icon || !title || !image || !publishDate || !readTime || !Array.isArray(sections)) {
      res.status(400).json({ error: "Invalid header data. Missing or invalid fields." });
      return;
    }
  
    // Validate sections
    const invalidSection = sections.some(
      (section) =>
        !section.type ||
        !section.icon ||
        !section.title ||
        !section.paragraph ||
        (section.type === "single-paragraph" && !Array.isArray(section.list)) ||
        (section.type === "two-column" &&
          (!Array.isArray(section.columns) ||
            section.columns.some(
              (column:any) => !column.heading || !Array.isArray(column.list)
            )))
    );
  
    if (invalidSection) {
      res.status(400).json({ error: "Invalid section data in header." });
      return;
    }
  
    // Validate products
    if (!Array.isArray(products) || products.length === 0) {
      res.status(400).json({ error: "Products should be a non-empty array." });
      return;
    }
  
    const invalidProduct = products.some(
      (product) =>
        !product.imageUrl && !product.title && !product.description && !product.price && !product.amazonUrl
    );
  
    if (invalidProduct) {
      console.log(req.body.products);
      res.status(400).json({ error: "Invalid product data." });
      return;
    }
  
    // Validate footer
    const { authorName, authorTitle, imageUrl } = footer;
    if (!authorName || !authorTitle || !imageUrl) {
      res.status(400).json({ error: "Invalid footer data." });
      return;
    }
  
    // Mock database save operation (replace with real DB logic)
    console.log("Blog data received:", req.body);
  
    try {
      const blog = await prisma.blog.create({
        data: {
          title,
          icon,
          imageUrl: image,
          publishDate,
          readTime,
          authorName,
          authorTitle,
          authorImage: imageUrl,
          sections: {
            create: sections.map((section) => ({
              type: section.type,
              icon: section.icon,
              title: section.title,
              paragraph: section.paragraph,
              list:
                section.type === "single-paragraph"
                  ? { create: section.list.map((item:any) => ({ item })) }
                  : undefined,
              columns:
                section.type === "two-column"
                  ? {
                      create: section.columns.map((column:any) => ({
                        heading: column.heading,
                        list: {
                          create: column.list.map((item:any) => ({ item })),
                        },
                      })),
                    }
                  : undefined,
            })),
          },
          products: {
            create: products, // Create related products in one step
          },
        },
        include: {
          sections: {
            include: {
              list: true,
              columns: {
                include: {
                  list: true,
                },
              },
            },
          },
          products: true,
        },
      });
  
      console.log(blog);
  
      res.status(201).json(blog);
      return;
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to create blog" });
    }
  });

// Get all blogs
router.get("/blogs", async (req, res) => {
    try {
      const blogs = await prisma.blog.findMany({
        include: {
          products: true,
          sections: {
            include: {
              list: true,
              columns: {
                include: {
                  list: true,
                },
              },
            },
          },
        },
      });
      res.json(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ error: "Failed to fetch blogs" });
    }
  });

// Get a blog by ID
router.get("/blogs/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const blog = await prisma.blog.findUnique({
        where: { id: Number(id) },
        include: {
          products: true,
          sections: {
            include: {
              list: true,
              columns: {
                include: {
                  list: true,
                },
              },
            },
          },
        },
      });
  
      if (!blog) {
        res.status(404).json({ error: "Blog not found" });
        return;
      }
  
      res.json(blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
      res.status(500).json({ error: "Failed to fetch blog" });
    }
  });

// Delete a blog
router.delete("/blogs/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.blog.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

export default router;
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="st-dropdown-section">
      <div className="st-dropdown-content">
        <div className="st-dropdown-content-group">
          <div className="row">
            <div className="col me-4">
              <h4 className="regular text-uppercase">Full width</h4>
              <Link className="dropdown-item" to="/blog/blog-post">
                Single post
              </Link>
              <Link className="dropdown-item" to="/blog/blog-grid">
                Posts Grid
              </Link>
            </div>
            <div className="col me-4">
              <h4 className="regular text-uppercase">Sidebar left</h4>
              <Link className="dropdown-item" to="/blog/blog-post-sidebar-left">
                Single post
              </Link>
              <Link className="dropdown-item" to="/blog/blog-grid-sidebar-left">
                Posts Grid
              </Link>
            </div>
            <div className="col me-4">
              <h4 className="regular text-uppercase">Sidebar right</h4>
              <Link
                className="dropdown-item"
                to="/blog/blog-post-sidebar-right"
              >
                Single post
              </Link>
              <Link
                className="dropdown-item"
                to="/blog/blog-grid-sidebar-right"
              >
                Posts Grid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

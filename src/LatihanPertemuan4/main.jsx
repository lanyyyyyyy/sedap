import { createRoot } from "react-dom/client";
import './tailwind.css';
import ProductListSearchFilter from "./ProductListSearchFilter";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <ProductListSearchFilter/>
        </div>
    )

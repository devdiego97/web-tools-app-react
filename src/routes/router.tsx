import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { Notes } from "../pages/Notes";



export const router=createBrowserRouter([
	{
		path:"/",
		element: <MainLayout />,
		children:[
			{
				index:true,
				element:<Home />
			},
			{
				path:"/notes",
				element:<Notes />
			}
		]
	}
])
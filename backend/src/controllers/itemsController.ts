import axios from "axios";
import { Request, Response } from "express";

import { ApiResponse } from "../types";

const extractCategories = (data: any): string[] => {
  const categoryFilter = data.filters.find(
    // const categoryFilter = data.available_filters.find(
    (filter: any) => filter.id === "category"
  );
  if (categoryFilter) {
    return categoryFilter.values.flatMap((value: any) =>
      value.path_from_root.map((category: any) => category.name)
    );
  }
  return [];
};
export const getItems = async (req: Request, res: Response) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }
  try {
    const response = await axios.get(
      `${process.env.API_URL}/sites/MLA/search?q=${query}`
    );
    const data = response.data;

    const formattedResponse: ApiResponse = {
      author: {
        name: "Diego",
        lastname: "Rincon",
      },
      categories: extractCategories(data),
      items: data.results.slice(0, 4).map((item: any) => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: Math.round((item.price - Math.floor(item.price)) * 100),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      })),
    };

    res.status(200).json(formattedResponse);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from external API" });
  }
};

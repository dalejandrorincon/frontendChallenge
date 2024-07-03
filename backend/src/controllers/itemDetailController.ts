import axios from "axios";
import { Request, Response } from "express";
import { ItemDetailResponse, ItemDetail } from "../types";

export const getItemDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const itemResponse = await axios.get(`${process.env.API_URL}/items/${id}`);
    const descriptionResponse = await axios.get(
      `${process.env.API_URL}/items/${id}/description`
    );
    const itemData = itemResponse.data;
    const descriptionData = descriptionResponse.data;

    const itemDetail: ItemDetail = {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: Math.floor(itemData.price),
        decimals: Math.round(
          (itemData.price - Math.floor(itemData.price)) * 100
        ),
      },
      picture: itemData.pictures.length > 0 ? itemData.pictures[0].url : "",
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: descriptionData.plain_text,
    };
    const formattedResponse: ItemDetailResponse = {
      author: {
        name: "Diego",
        lastname: "Rincon",
      },
      item: itemDetail,
    };
    res.status(200).json(formattedResponse);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching item details from external API" });
  }
};

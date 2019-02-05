export class Product {
  quantity: number;
  price: string;
  available: boolean;
  stars: number;
  subLevel_id: number;
  name: string;
  description: string;
  image: string;
  createdAt?: Date;
  _id?: string;

    constructor(
      quantity: number,
      price: string,
      available: boolean,
      stars: number,
      subLevel_id: number,
      name: string,
      description: string,
      image: string,
      createdAt?: Date
    ) {
      this.quantity = quantity;
      this.price = price;
      this.available = available;
      this.stars = stars;
      this.subLevel_id = subLevel_id;
      this.name = name;
      this.description = description;
      this.image = image;
      this.createdAt = createdAt;
    }
}

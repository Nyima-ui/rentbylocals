export interface Product {
  id: string;
  owner_id: string;
  created_at: string;
  title: string;
  description: string;
  category: string;
  price_daily: number;
  price_weekly: number;
  price_monthly: number;
  images: string[];
  location_city: string;
  location_neighborhood: string[];
  location_geom: string | null;
  is_featured: boolean;
  is_active: boolean;
}

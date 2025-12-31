// src/data/servicesSearch.ts
import { mainServiceCategories } from './servicesData';

export interface ServiceSearchItem {
  name: string;
  path: string;
  categoryId: string;
  categoryName: string;
  slug: string;
}

export const SERVICE_SEARCH_INDEX: ServiceSearchItem[] =
  mainServiceCategories.flatMap((category) =>
    category.subServices.map((sub) => ({
      name: sub.name,
      // URL pattern based on your current routes:
      // /services/{category.slug}/{sub.slug}
      path: `/services/${category.slug}/${sub.slug}`,
      categoryId: category.id,
      categoryName: category.name,
      slug: sub.slug,
    })),
  );

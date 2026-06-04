import { BreadcrumbJsonLd, ProductJsonLd } from "@/components/JsonLd";
import RelatedProducts from "@/components/RelatedProducts";
import SingleProduct from "@/components/SingleProduct";
import Breadcrumb from "@/components/Breadcrumb";
import ProductLoader from "@/components/loader/ProductLoader";
import fetchData from "@/lib/fetchDataFromApi";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

type SingleProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: SingleProductPageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const res = await fetchData.get(`/singleProduct/${slug}`);
  const product: SingleProductType | null = res?.data || null;

  if (!product) {
    return { title: "Product Not Found" };
  }

  const imageUrl = product.image?.[0] || "/og-image.jpg";

  return {
    title: product.title,
    description: product.description?.slice(0, 160) || `${product.title} - Shop now on Qubimall`,
    openGraph: {
      title: product.title,
      description: product.description?.slice(0, 160) || `${product.title} - Shop now on Qubimall`,
      images: [
        {
          url: imageUrl.startsWith("http") ? imageUrl : `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.qubimall.online"}${imageUrl}`,
          width: 800,
          height: 800,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description?.slice(0, 160) || `${product.title} - Shop now on Qubimall`,
      images: [imageUrl.startsWith("http") ? imageUrl : `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.qubimall.online"}${imageUrl}`],
    },
  };
}

const SingleProductPage = async ({
  params: { slug },
}: SingleProductPageProps) => {
  const res = await fetchData.get(`/singleProduct/${slug}`);
  const product: SingleProductType | null = res?.data || null;

  return (
    <section className="single-product-page bg-secondary dark:bg-background">
      {product && (
        <>
          <BreadcrumbJsonLd
            items={[
              { name: "Home", url: "/" },
              { name: product.shop_category, url: `/shops/${product.shop_category}` },
              { name: product.title, url: `/products/${slug}` },
            ]}
          />
          <ProductJsonLd
            product={{
              title: product.title,
              description: product.description,
              price: product.price,
              oldPrice: product.oldPrice,
              image: product.image,
              rating: product.rating,
              categories: product.categories,
              _id: product._id,
              shop_category: product.shop_category,
            }}
          />
          <Breadcrumb />
          <SingleProduct product={product} />
        </>
      )}
      {!product && (
        <div className="h-screen w-full flex justify-center items-center text-3xl font-semibold text-center">
          Product Not Found
        </div>
      )}

      <Suspense
        fallback={
          <div className="container">
            <ProductLoader />
          </div>
        }
      >
        <div className="bg-accent pb-20 pt-10">
          <div className="container">
            <h1 className="mb-7 text-3xl font-semibold">You May Also like</h1>
            <div className="grid-layout">
              {product &&
                product?.categories.map((item) => (
                  <RelatedProducts
                    shop_category={product.shop_category}
                    category={item}
                    key={item}
                  />
                ))}
            </div>
          </div>
        </div>
      </Suspense>
    </section>
  );
};

export default SingleProductPage;

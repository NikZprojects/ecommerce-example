export async function storefront(query, variables = {}) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
  //...error handling
}
//GraphQL request
// query Products {
//   products(first:6) {
//     edges {
//       node {
//         title
//         handle
//         tags
//         priceRange  {
//           minVariantPrice{
//             amount
//           }
//         }
//         images(first:1) {
//           edges {
//             node {
//               transformedSrc
//               altText
//             }
//           }
//         }
//       }
//     }
//   }
// }

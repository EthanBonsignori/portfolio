console.log('🚀 ~ process.env.NODE_ENV:', process.env.NODE_ENV);
const baseRoute =
  process.env.NODE_ENV === 'production'
    ? process.env.FIREBASE_FUNCTIONS_ROUTE_PROD
    : process.env.FIREBASE_FUNCTIONS_ROUTE_LOCAL;

const origin =
  process.env.NODE_ENV === 'production'
    ? process.env.PROD_ORIGIN
    : process.env.LOCAL_ORIGIN;

export async function getBlog(blog) {
  try {
    const route = `${baseRoute}/getBlog/${blog}`;
    const res = await window.fetch(route, {
      mode: 'cors',
      method: 'GET',
      origin,
    });
    if (res.status !== 200) {
      return console.error(
        `Error fetching blog likes for blog: ${blog}`,
        await res.json(),
      );
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function likeBlog(blog) {
  try {
    const route = `${baseRoute}/likeBlog/${blog}`;
    const res = await window.fetch(route, {
      mode: 'cors',
      method: 'PUT',
      origin,
    });
    if (!res.ok) {
      return console.error(`Error Liking blog: ${blog}`, res);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

// export async function unlikeBlog(blog) {
//   try {
//     const res = await window.fetch(`${route}/${blog}/unlike`, {
//       method: 'PUT',
//     });
//     if (!res.ok) {
//       return console.error(`Error Unliking blog: ${blog}`, res);
//     }
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     return console.error(err);
//   }
// }

const baseRoute =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_FIREBASE_FUNCTIONS_ROUTE_PROD
    : process.env.FIREBASE_FUNCTIONS_ROUTE_LOCAL;

const origin =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_PROD_ORIGIN
    : process.env.LOCAL_ORIGIN;

export async function getBlogs() {
  try {
    const route = `${baseRoute}/getBlogs`;
    const res = await window.fetch(route, {
      mode: 'cors',
      method: 'GET',
      origin,
    });
    if (res.status !== 200) {
      return console.error('Error fetching blogs:', await res.json());
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

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

export async function commentBlog(blog, comment) {
  try {
    const route = `${baseRoute}/commentBlog/${blog}`;
    const res = await window.fetch(route, {
      mode: 'cors',
      method: 'PUT',
      origin,
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      return console.error(`Error Commenting on blog: ${blog}`, res);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

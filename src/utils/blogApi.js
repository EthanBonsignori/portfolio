import route from './route';

export async function getBlog(blog) {
  try {
    const res = await window.fetch(`${route}/${blog}`, { method: 'GET' });
    if (res.status !== 200) {
      return console.error(`Error fetching blog likes for blog: ${blog}`, res);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function likeBlog(blog) {
  try {
    const res = await window.fetch(`${route}/${blog}`, { method: 'PUT' });
    if (!res.ok) {
      return console.error(`Error Liking blog: ${blog}`, res);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

export async function unlikeBlog(blog) {
  try {
    const res = await window.fetch(`${route}/${blog}/unlike`, { method: 'PUT' });
    if (!res.ok) {
      return console.error(`Error Unliking blog: ${blog}`, res);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
}

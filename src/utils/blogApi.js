import route from './route';

export function getBlog(blog) {
  try {
    window.fetch(`${route}/${blog}`, { method: 'GET' });
  } catch (err) {
    console.error(err);
  }
}

export function likeBlog(blog) {
  try {
    window.fetch(`${route}/${blog}`, { method: 'PUT' });
  } catch (err) {
    console.error(err);
  }
}

export function unlikeBlog(blog) {
  try {
    window.fetch(`${route}/${blog}/unlike`, { method: 'PUT' });
  } catch (err) {
    console.error(err);
  }
}

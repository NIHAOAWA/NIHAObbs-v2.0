const postForm = document.getElementById('post-form');
const postList = document.getElementById('post-list');

postForm.addEventListener('submit', createPost);

// 创建默认帖子
document.addEventListener('DOMContentLoaded', function() {
  const defaultPost = {
    title: 'Hello, World',
    content: '欢迎来到论坛！这是一个新手指南的示例帖子。请随意浏览论坛并发表自己的观点。祝您在论坛中度过愉快的时光！'
  };
  
  createPostItem(defaultPost);
});

function createPost(e) {
  e.preventDefault();

  const titleInput = document.getElementById('title');
  const contentInput = document.getElementById('content');

  const title = titleInput.value;
  const content = contentInput.value;

  const post = {
    title: title,
    content: content
  };

  createPostItem(post);

  titleInput.value = '';
  contentInput.value = '';
}

function createPostItem(post) {
  const postItem = document.createElement('li');
  const postTitle = document.createElement('h3');
  const postContent = document.createElement('p');

  postTitle.textContent = post.title;
  postContent.textContent = post.content;

  postItem.appendChild(postTitle);
  postItem.appendChild(postContent);

  postList.appendChild(postItem);
}

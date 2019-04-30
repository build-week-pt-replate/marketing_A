class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = domElement.querySelector(".expandButton");
    this.expandButton.textContent = "expand";
    this.expandButton.addEventListener("click", this.expandArticle.bind(this));
  }

  expandArticle() {
    this.domElement.classList.toggle("article-open");
  }
}

let articles = document
  .querySelectorAll(".article")
  .forEach(article => new Article(article));

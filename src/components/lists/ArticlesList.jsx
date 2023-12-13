import "../../assets/css/ArticleStyles.css";
import "../cards/ArticlesCard";
import ArticlesCard from "../cards/ArticlesCard";

function ArticlesList() {
    return(
      <section className="blogs">
        <ArticlesCard />
      </section>
    )
}


export default ArticlesList;
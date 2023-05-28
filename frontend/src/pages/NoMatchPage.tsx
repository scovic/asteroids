import { Link } from "react-router-dom";
import { RouterPaths } from "../Router";

function NoMatchPage() {
  return (
    <div>
      Page not found, please return to &nbsp;
      <Link to={RouterPaths.ASTEROID_LIST_PAGE_PATH}>home page</Link>
    </div>
  )
}

export default NoMatchPage;

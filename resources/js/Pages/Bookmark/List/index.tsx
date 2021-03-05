// @ts-ignore
import React from 'react'
import Layout from "../../../components/common/layout";

interface Props {
  bookmarks: Array<any>
}

const BookmarkListPage:React.FC<Props> = ({bookmarks}) => {

  return(
    <Layout>
    <div className="row">
      <div className="col-sm-8">
        <ul className="list-group">
          {bookmarks.length > 0 && bookmarks.map((bookmarks, index) => {
            return <li className="list-group-item" key={index}>
              <p>Title: {bookmarks.title}</p>
            </li>
          })}
        </ul>
      </div>
    </div>
    </Layout>
  );

}

export default BookmarkListPage;

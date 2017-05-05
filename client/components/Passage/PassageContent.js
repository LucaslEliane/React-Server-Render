import React from 'react'
import { Link } from 'react-router-dom'
import styles from './less/PassageContent.less'

export default class PassageContent extends React.Component {
  constructor(props) {
    super(props)
  }
  getPassageLength(passage) {
    let words = 0
    if ( Object.prototype.toString.call(passage) == '[object Array]' ) {
      return 0
    }
    passage.forEach((value) => {
      words += value.length
    })
    return words
  }
  render() {
    const { passageTitle,
            passageContent,
            comment,
            author: {
              authorAvatar,
              authorID,
              authorName
            },
            passageView,
            passageImage,
            passageTime,
            passagePrefer,
            passageID,
    } = this.props.passage
    const passageArr = []
    passageContent.forEach((value) => passageArr.push((<p>{value}</p>)))
    return (
      <div className="center-passage">
        <h2>
          {passageTitle}
        </h2>
        <div className="passage-info">
          <img src={authorAvatar} alt=""/>
          <div className="author">
            <span className="author-font">
              作者
            </span>
            <span className="author-name">
              { authorName }
            </span>
            <Link to="javascript:void(0)">
              + 关注
            </Link>
            <br/>
            <span className="information">
              { `${passageTime}` }
            </span>
            <span className="information">
              { `字数 ${this.getPassageLength(passageContent)}` }
            </span>
            <span className="information">
              { `阅读  ${passageView}` }
            </span>
            <span className="information">
              { `评论 ${comment.length}` }
            </span>
            <span className="information">
              { `喜欢 ${passagePrefer}` }
            </span>
          </div>
        </div>
        <article>
          { passageArr }
        </article>
      </div>
    )
  }
}
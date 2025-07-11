import React, { useState } from "react";

function Video({ type, url, views }) {
  return views > 1000 ? (
    <>
      <PopularVideo url={url} />
    </>
  ) : views < 100 ? (
    <>
      <NewVideo url={url} />
    </>
  ) : (
    <div className="video">
      <iframe src={url} allow="autoplay; encrypted-media" allowFullScreen title="video" />
    </div>
    );
};

function NewVideo({url}) {
  return (
    <div className="video wrap-item-new">
      <iframe src={url} allow="autoplay; encrypted-media" allowFullScreen title="video" />
    </div>
    );
};

function PopularVideo({url}) {
  return (
    <div className="video wrap-item-popular">
      <iframe src={url} allow="autoplay; encrypted-media" allowFullScreen title="video" />
    </div>
    );
};

function Article(props) {
    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case "video":
                return (
                    <Video {...item} />
                );

            case "article":
                return (
                    <Article {...item} />
                );
        }
    });
};

export default function App() {
    const [list, setList] = useState([
        {
            type: "video",
            url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
            views: 50
        },
        {
            type: "video",
            url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
            views: 12
        },
        {
            type: "article",
            title: "Невероятные события в неизвестном поселке...",
            views: 175
        },
        {
            type: "article",
            title: "Секретные данные были раскрыты!",
            views: 1532
        },
        {
            type: "video",
            url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
            views: 4253
        },
        {
            type: "article",
            title: "Кот Бегемот обладает невероятной...",
            views: 12,
        },
    ]);

    return (
        <List list={list} />
    );
}
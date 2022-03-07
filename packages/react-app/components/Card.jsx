import { get, isEmpty } from "lodash";
import React from "react";

function descriptionShorten(description) {
  if (!isEmpty(description)) {
    let front = description.slice(0, 100);
    if (description.length > 100) {
      front += "...";
    }
    return front;
  }
  return "n/a";
}

export default function Card({ data }) {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div className="p-6">
        <button
          onClick={() => window.open(get(data, "project_url"), "_blank")}
          type="button"
          className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 underline hover:text-grey-900"
        >
          {get(data, "project_name")}
        </button>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{get(data, "title")}</h1>
        <p className="leading-relaxed mb-3">{descriptionShorten(get(data, "body") || "no description")}</p>
        <div className="flex items-center flex-wrap ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={get(data, "url")}
            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >
            Check It Out {" >"}
          </a>
        </div>
      </div>
    </div>
  );
}

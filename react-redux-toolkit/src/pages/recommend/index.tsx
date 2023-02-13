import React, { memo, useEffect } from "react";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getBannersSelector } from "@/store/recommend";
import { RecommendWrapped } from "./style";
import { requestBannersAction } from "@/store/recommend/thunk";

const Recommend = memo(() => {
  const dispatch = useAppDispatch();
  const banners = useAppSelector(getBannersSelector, shallowEqual);
  console.log(`Recommend 渲染了: banners: ${banners.length}`);

  useEffect(() => {
    dispatch(requestBannersAction());
  }, [dispatch]);

  return (
    <RecommendWrapped>
      <h2>Recommend</h2>
      <div className="banners">
        {banners.map((item, i) => {
          return (
            <div key={item.scm} className="item">
              <p className="title">{item.typeTitle}</p>
              <img className="img" src={item.imageUrl} alt={item.typeTitle} />
            </div>
          );
        })}
      </div>
    </RecommendWrapped>
  );
});

export default Recommend;

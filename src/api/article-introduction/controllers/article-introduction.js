/*
 * @Author: lsy155497 LiuSY155497@yimidida.com
 * @Date: 2022-11-14 15:06:16
 * @LastEditors: lsy155497 LiuSY155497@yimidida.com
 * @LastEditTime: 2022-11-14 17:34:21
 * @FilePath: /next/nextjs-cms/src/api/article-introduction/controllers/article-introduction.js
 * @Description: 
 * 
 * Copyright (c) 2022 by lsy155497 LiuSY155497@yimidida.com, All Rights Reserved. 
 */
'use strict';

/**
 * article-introduction controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { removeTime, removeAttesAndId } = require("../../../utils/index.js");

module.exports = createCoreController(
    "api::article-introduction.article-introduction",
    ({ strapi }) => ({
        async find(ctx) {
            const { pageNo, pageSize, ...params } = ctx.query;
            if (pageNo && pageSize) {
                ctx.query = {
                    ...params,
                    "pagination[page]": Number(pageNo),
                    "pagination[pageSize]": Number(pageSize),
                };
            }
            const { data, meta } = await super.find(ctx);
            return { data: removeAttesAndId(removeTime(data)), meta };
        },
    })
);

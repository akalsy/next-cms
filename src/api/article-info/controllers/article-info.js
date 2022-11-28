/*
 * @Author: lsy155497 LiuSY155497@yimidida.com
 * @Date: 2022-11-10 17:11:56
 * @LastEditors: lsy155497 LiuSY155497@yimidida.com
 * @LastEditTime: 2022-11-14 18:28:16
 * @FilePath: /next/nextjs-cms/src/api/article-info/controllers/article-info.js
 * @Description: 
 * 
 * Copyright (c) 2022 by lsy155497 LiuSY155497@yimidida.com, All Rights Reserved. 
 */
'use strict';
const { removeTime, removeAttesAndId } = require("../../../utils/index.js");


/**
 * article-info controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article-info.article-info', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: "deep",
        };
        const { data } = await super.find(ctx);
        return removeAttesAndId(removeTime(data[0]));
    },
}));

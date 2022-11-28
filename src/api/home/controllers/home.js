/*
 * @Author: lsy155497 LiuSY155497@yimidida.com
 * @Date: 2022-11-14 15:07:13
 * @LastEditors: lsy155497 LiuSY155497@yimidida.com
 * @LastEditTime: 2022-11-14 15:55:27
 * @FilePath: /next/nextjs-cms/src/api/home/controllers/home.js
 * @Description: 
 * 
 * Copyright (c) 2022 by lsy155497 LiuSY155497@yimidida.com, All Rights Reserved. 
 */
'use strict';
const { removeTime, removeAttesAndId } = require("../../../utils/index.js");
/**
 * home controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::home.home", ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: "deep",
        };
        const { data } = await super.find(ctx);
        return removeAttesAndId(removeTime(data[0]));
    },
}));

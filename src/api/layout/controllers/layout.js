"use strict";

/**
 * layout controller
 */

const { removeAttesAndId, removeTime } = require("../../../utils/index");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::layout.layout"
, ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: "deep",
    };
    const { data } = await super.find(ctx);
    return removeAttesAndId(removeTime(data[0]));
  },
}));

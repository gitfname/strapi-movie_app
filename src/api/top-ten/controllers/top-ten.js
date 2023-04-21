'use strict';

/**
 * A set of functions called "actions" for `top-ten`
 */

function random(min, max) {
  return Math.floor(Math.random() * ( max - min )) + min
}

async function getTopTenMovies() {
  const items = await strapi.entityService.findMany("api::movie.movie", {
    fields: ["id", "name"],
    populate: {
      movie_likes: {
        fields: ["id"],
        filters: {
            like: true
        }
      },
      thumbnail: {
          fields: ["id", "name", "url"]
      }
    }
  })

  let _topItems = {}
  let topItems = []

  items.forEach(item => {
      if(item.id in _topItems) {
          _topItems[item.id] = {
              ..._topItems[item.id],
              "likes": (_topItems[item.id].likes + item.likes.length)
          }
      }
      else {
          _topItems[item.id] = {
              "id": item.id,
              "name": item.name,
              "image": item?.thumbnail?.url || false,
              "likes": item.movie_likes.length
          }
      }
  })

  Object.getOwnPropertyNames(_topItems).forEach(key => {
      topItems.push([key, _topItems[key]])
  })

  return topItems.sort((item1, item2) => item2[1].likes - item1[1].likes).slice(0, 10)
}

async function getTopTenTvSeries() {
  const items = await strapi.entityService.findMany("api::tv-show.tv-show", {
    fields: ["id", "name"],
    populate: {
      tv_show_likes: {
        fields: ["id"],
        filters: {
            like: true
        }
      },
      thumbnail: {
          fields: ["id", "name", "url"]
      }
    }
  })

  let _topItems = {}
  let topItems = []

  items.forEach(item => {
      if(item.id in _topItems) {
          _topItems[item.id] = {
              ..._topItems[item.id],
              "likes": (_topItems[item.id].likes + item.likes.length)
          }
      }
      else {
          _topItems[item.id] = {
              "id": item.id,
              "name": item.name,
              "image": item?.thumbnail?.url || false,
              "likes": item.tv_show_likes.length
          }
      }
  })

  Object.getOwnPropertyNames(_topItems).forEach(key => {
      topItems.push([key, _topItems[key]])
  })

  return topItems.sort((item1, item2) => item2[1].likes - item1[1].likes).slice(0, 10)
}

async function getTopTenActors() {
  const items = await strapi.entityService.findMany("api::actor.actor", {
    fields: ["id", "first_name", "last_name"],
    populate: {
      actor_likes : {
        fields: ["id"],
        filters: {
            like: true
        }
      },
      image: {
          fields: ["id", "name", "url"]
      }
    }
  })

  let _topItems = {}
  let topItems = []

  items.forEach(item => {
      if(item.id in _topItems) {
          _topItems[item.id] = {
              ..._topItems[item.id],
              "likes": (_topItems[item.id].actor_likes + item.likes.length)
          }
      }
      else {
          _topItems[item.id] = {
              "id": item.id,
              "firstname": item["first_name"],
              "lastname": item["last_name"],
              "image": item?.image
              ?
                {
                  "id": item["image"]["id"],
                  "name": item["image"]["name"],
                  "url": item["image"]["url"]
                }
              :
                false,
              "likes": item["actor_likes"].length
          }
      }
  })

  Object.getOwnPropertyNames(_topItems).forEach(key => {
      topItems.push([key, _topItems[key]])
  })

  return topItems.sort((item1, item2) => item2[1].likes - item1[1].likes).slice(0, 10)
}

async function getTopTenActresses() {
  const items = await strapi.entityService.findMany("api::actress.actress", {
    fields: ["id", "first_name", "last_name"],
    populate: {
      actress_likes  : {
        fields: ["id"],
        filters: {
            like: true
        }
      },
      image: {
          fields: ["id", "name", "url"]
      }
    }
  })

  let _topItems = {}
  let topItems = []

  items.forEach(item => {
      if(item.id in _topItems) {
          _topItems[item.id] = {
              ..._topItems[item.id],
              "likes": (_topItems[item.id].actress_likes + item.likes.length)
          }
      }
      else {
          _topItems[item.id] = {
              "id": item.id,
              "firstname": item["first_name"],
              "lastname": item["last_name"],
              "image": item?.image
              ?
                {
                  "id": item["image"]["id"],
                  "name": item["image"]["name"],
                  "url": item["image"]["url"]
                }
              :
                false,
              "likes": item["actress_likes"].length
          }
      }
  })

  Object.getOwnPropertyNames(_topItems).forEach(key => {
      topItems.push([key, _topItems[key]])
  })

  return topItems.sort((item1, item2) => item2[1].likes - item1[1].likes).slice(0, 10)
}

async function getTopTenCategories() {
  const items = await strapi.entityService.findMany("api::movie.movie", {
    fields: ["id", "name"],
    populate: {
      movie_likes: {
        fields: ["id"],
        filters: {
            like: true
        }
      },
      categories: {
          fields: ["id", "name"]
      }
    }
  })

  let _topItems = {}
  let topItems = []

  items.forEach(item => {
    item.categories.forEach(category => {
      if(category.id in _topItems) {
          _topItems[category.id] = {
              ..._topItems[category.id],
              "likes": (_topItems[category.id].likes + item.movie_likes.length)
          }
      }
      else {
          _topItems[category.id] = {
              "id": category.id,
              "name": category.name,
              "likes": item.movie_likes.length
          }
      }
    })
  })

  Object.getOwnPropertyNames(_topItems).forEach(key => {
      topItems.push([key, _topItems[key]])
  })

  return topItems.sort((item1, item2) => item2[1].likes - item1[1].likes).slice(0, 10)
}



module.exports = {
  getTopTen: async (ctx, next) => {

    const { collectionName } = ctx.params || false

    if(!collectionName) {
      ctx.body = JSON.stringify({"statusText": "failed", "message": "collectioName is required"})
      return
    }
    
    try {

      switch (collectionName) {
        case 'movies':
          ctx.body = await getTopTenMovies()
        break;

        case 'series':
          ctx.body = await getTopTenTvSeries()
        break;

        case 'actors':
          ctx.body = await getTopTenActors()
        break;
        
        case 'actresses':
          ctx.body = await getTopTenActresses()
        break;

        case 'categories':
          ctx.body = await getTopTenCategories()
        break;
      
        default:
          ctx.body = "collection not found"
        break;
      }

    } catch (err) {
      console.log(err);
      ctx.body = "something went wrong";
    }
  }
};

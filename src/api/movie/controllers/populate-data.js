'use strict';

/**
 * A set of functions called "actions" for `populate-data`
 */

function random(min, max) {
  return Math.floor(Math.random() * ( max - min )) + min
}


async function getUsers() {
  return await strapi.entityService.findMany("plugin::users-permissions.user", {
    fields: ["id"]
  })
}

async function createActor(fname, lname, image) {
  const res = await strapi.entityService.create("api::actor.actor", {
    fields: ["id", "first_name"],
    data: {
      "first_name": `actor ${fname} - fname`,
      "last_name": `actor ${lname} lname`,
      "image": image
    }
  })

  return res
}

async function getActors() {
  return await strapi.entityService.findMany("api::actor.actor", {
    fields: ["id"]
  })
}

async function createActorLike(value, actor, owner) {
  return await strapi.entityService.create("api::actor-like.actor-like", {
    fields: ["id"],
    data: {
      "like": value,
      "actor": actor,
      "owner": owner
    }
  })
}

async function getActresses() {
  return await strapi.entityService.findMany("api::actress.actress", {
    fields: ["id"]
  })
}

async function createActress(fname, lname, image) {
  return await strapi.entityService.create("api::actress.actress", {
    fields: ["id"],
    data: {
      "first_name": fname,
      "last_name": lname,
      "image": image
    }
  })
}

async function createActressLike(value, actress, owner) {
  return await strapi.entityService.create("api::actress-like.actress-like", {
    fields: ["id"],
    data: {
      "like": value,
      "actress": actress,
      "owner": owner
    }
  })
}


async function getCategories() {
  return await strapi.entityService.findMany("api::category.category", {
    fields: ["id", "movies"]
  })
}

async function createCategory(name, currentMovies, movieId) {
  return await strapi.entityService.create("api::category.category", {
    fields: ["id", "movies"],
    data: {
      "name": name,
      "movies": [...currentMovies, movieId]
    }
  })
}


function createMovie() {}


function createMovieComment() {}
function createMovieCommentLike() {}
function createMovieLike() {}

module.exports = {
  populateData: async (ctx, next) => {
    try {
      
      // create actors

      // for(let i = 1; i<14; i++) {
      //   count++
      //   await createActor(`actor-${i}`, `actor-${i}-lname`, i)
      // }



      // create and attach actor-likes to actors

      // const users = await getUsers()
      // const actors = await getActors();
      // const actorsLength = actors.length

      // for(let userindex in users) {
      //   for(let actorindex in actors) {
      //     if(random(0, 3)) {
      //       await createActorLike(random(0, 2), actors[actorindex].id, users[userindex])
      //     }
      //   }
      // }



      // create actresses

      // for(let i = 1; i<22; i++) {
      //   await createActress(`actress ${i} fname`, `actress ${i} lname`, (i+20))
      // }



      // attach and create actressLike

      // const users = await getUsers()
      // const actresses = await getActresses();
      // const actressesLength = actresses.length

      // for(let userindex in users) {
      //   for(let actressindex in actresses) {
      //     if(random(0, 3)) {
      //       await createActressLike(random(0, 2), actresses[actressindex].id, users[userindex])
      //     }
      //   }
      // }

      

      ctx.body = "hello world"
      
    } catch (err) {
      ctx.body = err;
    }
  }
};

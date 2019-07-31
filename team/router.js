const { Router } = require('express')
const Team = require('../team/model')
const route = new Router()


route.get('/team', (req, res, next) =>
  Team.findAll()
    .then(teams => res.json(teams))
    .catch(error => next(error))
)

route.post('/team', (req, res, next) =>
  Team.create(req.body)
    .then(team => res.json(team)
      .catch(error => next(error))
    ))

route.get('/team/:id', (req, res, next) =>
  Team.findByPk(req.params.id)
    .then(team => (res.json(team))
      .catch(error => next(error))
    ))

route.put(
  '/team/:id',
  (request, response, next) => {
    Team
      .findByPk(request.params.id)
      .then(team => team.update(request.body))
      .then(team => response.send(team))
      .catch(next)
  }
)

route.delete(
  '/team/:id',
  (request, response, next) => {
    Team
      .destroy({
        where: {
          id: request.params.id
        }
      })
      .then(number => number?response.send('Row is deleted'
      ):response.send('Something wrong'))
      .catch(next)
  }
)


module.exports = route
// module.exports = {
//   create: ( req, res, next ) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.create_product()
//       .then( () => res.sendStatus(200) )
//       .catch( err => {
//         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//       } );
//   },

//   getOne: ( req, res, next ) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.read_product()
//       .then( product => res.status(200).send( product ) )
//       .catch( err => {
//         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//       } );
//   },

//   getAll: ( req, res, next ) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.read_products()
//       .then( products => res.status(200).send( products ) )
//       .catch( err => {
//         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//       } );
//   },

//   update: ( req, res, next ) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.update_product()
//       .then( () => res.sendStatus(200) )
//       .catch( err => {
//         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//       } );
//   },

//   delete: ( req, res, next ) => {
//     const dbInstance = req.app.get('db');

//     dbInstance.delete_product()
//       .then( () => res.sendStatus(200) )
//       .catch( err => {
//         res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
//         console.log(err)
//       } );
//   }
// };

module.exports = {
  create: ( req, res, next ) => {
    const db = req.app.get('db');
    const { name, description, price, image_url } = req.body;

    db.create_product([ name, description, price, image_url ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getOne: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params } = req;

    db.read_product([ params.id ])
      .then( product => res.status(200).send( product ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getAll: ( req, res, next ) => {
    const db = req.app.get('db');

    db.read_products()
      .then( products => res.status(200).send( products ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  update: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params, query } = req;

    db.update_product([ params.id, query.desc ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  delete: ( req, res, next ) => {
    const db = req.app.get('db');
    const { params } = req;

    db.delete_product([ params.id ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  }
};
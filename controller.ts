import client from "./database.ts";
// import studList from "./stud.ts";

export const getStud = async (
  { response }: { response: any },
) => {
  // console.log("dfsaf");
  const result = await client.query(
    `SELECT * FROM booksharingapi_stud`,
  );
  // console.log(result);
  // studList = result.rows;
  var list = new Array();

  result.rows.map((beer) => {
    var obj = new Object();

    result.rowDescription.columns.map((el, i) => {
      (obj as any)[el.name] = beer[i];
    });
    list.push(obj);
  });
  response.body = list;
  response.status = 200;
};

export const getStudById = async (
  { response, params }: { response: any; params: { id: string } },
) => {
  // console.log("dfsaf");
  const result = await client.query(
    `SELECT * FROM booksharingapi_stud where id = ${params.id};`,
  );
  // console.log(result);
  // studList = result.rows;
  var list = new Array();

  result.rows.map((beer) => {
    var obj = new Object();

    result.rowDescription.columns.map((el, i) => {
      (obj as any)[el.name] = beer[i];
    });
    list.push(obj);
  });
  response.body = list;
  response.status = 200;
};

export const getBook = async (
  { response }: { response: any },
) => {
  // console.log("dfsaf");
  const result = await client.query(
    `SELECT b.*,i.* FROM booksharingapi_book b,booksharingapi_image i where b."bookId"=i."bookId_id"`,
  );
  // console.log(result);
  // studList = result.rows;
  var list = new Array();

  result.rows.map((beer) => {
    var obj = new Object();

    result.rowDescription.columns.map((el, i) => {
      (obj as any)[el.name] = beer[i];
    });
    list.push(obj);
  });
  response.body = list;
  response.status = 200;
};

export const getPurchasedBook = async (
  { response }: { response: any },
) => {
  const result = await client.query(
    `SELECT * FROM booksharingapi_purchasedbook`,
  );
  // console.log(result);
  // studList = result.rows;
  var list = new Array();

  result.rows.map((beer) => {
    var obj = new Object();

    result.rowDescription.columns.map((el, i) => {
      (obj as any)[el.name] = beer[i];
    });
    list.push(obj);
  });
  response.body = list;
  response.status = 200;
};

export const getPurchasedBookByStud = async (
  { response, params }: { response: any; params: { studId: string } },
) => {
  const result = await client.query(
    `SELECT * FROM booksharingapi_purchasedbook where "studId_id" = ${params.studId}`,
  );
  // console.log(result);
  // studList = result.rows;
  var list = new Array();

  result.rows.map((beer) => {
    var obj = new Object();

    result.rowDescription.columns.map((el, i) => {
      (obj as any)[el.name] = beer[i];
    });
    list.push(obj);
  });
  response.body = list;
  response.status = 200;
};

export const deleteStud = async (
  { response, params }: { response: any; params: { studid: string } },
) => {
  const result = await client.query(
    `DELETE FROM booksharingapi_stud where id = ${params.studid}`,
  );
  if (result) {
    response.body = "ok";
    response.status = 200;
  } else {
    response.body = "Not found";
    response.status = 404;
  }
};

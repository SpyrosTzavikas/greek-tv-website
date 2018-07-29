#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;
#[macro_use] extern crate rocket_contrib;

use rocket_contrib::{Json, Value};


#[get("/")]
fn read() -> Json<Value> {
    Json(json!([
        "hero 1",
        "hero 2",
    ]))
}

fn main() {
    rocket::ignite()
        .mount("/", routes![read])
        .launch();
}

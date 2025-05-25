// SPDX-License-Identifier: Apache-2.0

module suimemento::event {
  use sui::object::{Self, UID};
  use sui::transfer;
  use sui::tx_context::{Self, TxContext};
  use std::string::String;

  public struct Event has key {
    id: UID,
    name: String,
    date: u64,
    location: String,
    organizer: address,
    description: String,
    badge_design: String,
  }

  public entry fun create_event(
    name: vector<u8>,
    date: u64,
    location: vector<u8>,
    description: vector<u8>,
    badge_design: vector<u8>,
    ctx: &mut TxContext
  ) {
    let event = Event {
      id: object::new(ctx),
      name: string::utf8(name),
      date,
      location: string::utf8(location),
      organizer: tx_context::sender(ctx),
      description: string::utf8(description),
      badge_design: string::utf8(badge_design),
    };
    transfer::share_object(event);
  }
}
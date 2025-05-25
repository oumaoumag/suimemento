// SPDX-License-Identifier: Apache-2.0

module suimemento::badge {
  use sui::object::{Self, UID};
  use sui::transfer;
  use sui::tx_context::{Self, TxContext};
  use std::string::String;

  struct Badge has key, store {
    id: UID,
    event_id: ID,
    name: String,
    owner: address,
    level: u64,
  }

    public entry fun mint_badge(event_id: ID, name: vector<u8>, recipient: address, ctx: &mut TxContext) {
    let badge = Badge {
      id: object::new(ctx),
      event_id,
      name: string::utf8(name),
      owner: recipient,
      level: 1,
    };
    transfer::transfer(badge, recipient);
  }
}
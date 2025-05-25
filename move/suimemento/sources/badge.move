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

}
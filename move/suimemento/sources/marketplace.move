// SPDX-License-Identifier: Apache-2.0

module suimemento::marketplace {
  use sui::object::{Self, UID};
  use sui::transfer;
  use sui::tx_context::{Self, TxContext};
  use sui::coin::{Self, Coin};
  use sui::sui::SUI;
  use suimemento::badge::Badge;

 public struct Listing has key {
    id: UID,
    badge_id: ID,
    price: u64,
    seller: address,
  }

  public entry fun list_badge(badge: Badge, price: u64, ctx: &mut TxContext) {
    let listing = Listing {
      id: object::new(ctx),
      badge_id: object::id(&badge),
      price,
      seller: tx_context::sender(ctx),
    };
    transfer::share_object(listing);
    transfer::transfer(badge, tx_context::sender(ctx));
  }

  public entry fun buy_badge(listing: &mut Listing, payment: Coin<SUI>, ctx: &mut TxContext) {
    assert!(coin::value(&payment) >= listing.price, 1);
    transfer::public_transfer(payment, listing.seller);
    // TODO:
    // implement actual badge transfer logic
  }
}
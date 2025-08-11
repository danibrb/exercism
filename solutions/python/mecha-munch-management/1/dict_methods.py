"""Functions to manage a users shopping cart items."""


def add_item(current_cart, items_to_add):
    """Add items to shopping cart.

    :param current_cart: dict - the current shopping cart.
    :param items_to_add: iterable - items to add to the cart.
    :return: dict - the updated user cart dictionary.
    """

    for item in items_to_add:
        val = current_cart.get(item, 'n')
        if val == 'n':
            current_cart[item] = 1
        else:
            current_cart[item] = val + 1
    return current_cart


def read_notes(notes):
    """Create user cart from an iterable notes entry.

    :param notes: iterable of items to add to cart.
    :return: dict - a user shopping cart dictionary.
    """

    return dict.fromkeys(notes, 1)


def update_recipes(ideas, recipe_updates):
    """Update the recipe ideas dictionary.

    :param ideas: dict - The "recipe ideas" dict.
    :param recipe_updates: dict - dictionary with updates for the ideas section.
    :return: dict - updated "recipe ideas" dict.
    """

    recipe_updates = dict(recipe_updates)
    for key in recipe_updates:
        ideas[key] = recipe_updates[key]
    return ideas

def sort_entries(cart):
    """Sort a users shopping cart in alphabetically order.

    :param cart: dict - a users shopping cart dictionary.
    :return: dict - users shopping cart sorted in alphabetical order.
    """

    return dict(sorted(cart.items()))


def send_to_store(cart, aisle_mapping):
    """Combine users order to aisle and refrigeration information.

    :param cart: dict - users shopping cart dictionary.
    :param aisle_mapping: dict - aisle and refrigeration information dictionary.
    :return: dict - fulfillment dictionary ready to send to store.
    """

    ciro = {}
    for key in cart.keys():
        num = []
        num.append(cart[key])
        ciro[key] = num + aisle_mapping[key]
    return dict(reversed(sorted(ciro.items())))

def update_store_inventory(fulfillment_cart, store_inventory):
    """Update store inventory levels with user order.

    :param fulfillment cart: dict - fulfillment cart to send to store.
    :param store_inventory: dict - store available inventory
    :return: dict - store_inventory updated.
    """
    
    for key in store_inventory.keys():
        num = (store_inventory.get(key,[0])[0] -                                     fulfillment_cart.get(key,[0])[0])
        print(num)
        if num == 0: num = 'Out of Stock'
        store_inventory[key][0] = num
    return store_inventory
        

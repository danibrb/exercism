"""Functions which helps the locomotive engineer to keep track of the train."""


def get_list_of_wagons(*args):
    """Return a list of wagons.

    :param: arbitrary number of wagons.
    :return: list - list of wagons.
    """
    lst = [*args]
    return lst


def fix_list_of_wagons(each_wagons_id, missing_wagons):
    """Fix the list of wagons.

    :param each_wagons_id: list - the list of wagons.
    :param missing_wagons: list - the list of missing wagons.
    :return: list - list of wagons.
    """
    a, b, *rest = each_wagons_id
    rest.append(a)
    rest.append(b)
    loc, *rest = rest
    train = []
    train.append(loc)
    train += missing_wagons + rest
    return train


def add_missing_stops(rout, **kwargs):
    """Add missing stops to route dict.

    :param route: dict - the dict of routing information.
    :param: arbitrary number of stops.
    :return: dict - updated route dictionary.
    """
    rout["stops"]= list(kwargs.values())
    return rout


def extend_route_information(route, more_route_information):
    """Extend route information with more_route_information.

    :param route: dict - the route information.
    :param more_route_information: dict -  extra route information.
    :return: dict - extended route information.
    """
    return {**route, **more_route_information}


def fix_wagon_depot(wagons_rows):
    """Fix the list of rows of wagons.

    :param wagons_rows: list[list[tuple]] - the list of rows of wagons.
    :return: list[list[tuple]] - list of rows of wagons.
    """
    c0, c1, c2 = wagons_rows
    c1[0], c0[1] = c0[1], c1[0]
    c2[0], c0[2] = c0[2], c2[0]
    c2[1], c1[2] = c1[2], c2[1]
    return [c0, c1, c2]

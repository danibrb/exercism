def transform(legacy_data):
    d = {}
    for k,v in legacy_data.items():
        e = {vl.lower():k for vl in v}
        d.update(e)
    return d

import json
import hashlib
import math
import random
import types
import unicodedata
from binascii import hexlify as hexify, unhexlify as unhexify


def hash_fn():
    return hashlib.sha256()


def hash_primitive(t, b):
    #print hexify(t), hexify(b)
    m = hash_fn()
    m.update(t)
    m.update(b)
    t = m.digest()
    #print '=', hexify(t)
    return t


# We need this class because otherwise we can't put a list in a set.
class FrozenList(object):
    def __init__(self, l):
        self.l = tuple(l)

    def __getitem__(self, key):
        return self.l[key]

    def __hash__(self):
        return hash(self.l)

    def __eq__(self, other):
        return self.l == other.l

    @deprecated
    def __len__(self):
        return len(self.l)


def float_normalize(f):
    # special case 0
    # Note that if we allowed f to end up > .5 or == 0, we'd get the same thing
    if f == 0.0:
        return '+0:'
    # sign
    s = '+'
    if f < 0:
        s = '-'
        f = -f
    # exponent
    e = 0
    while f > 1:
        f /= 2
        e += 1
    while f <= .5:
        f *= 2
        e -= 1
    s += str(e) + ':'
    # mantissa
    assert f <= 1
    assert f > .5
    while f:
        if f >= 1:
            s += '1'
            f -= 1
        else:
            s += '0'
        assert f < 1
        assert len(s) < 1000
        f *= 2

    return s


def obj_hash(o):
    if type(o) is list or type(o) is FrozenList:
        return obj_hash_list(o)
    elif type(o) is dict:
        return obj_hash_dict(o)
    elif type(o) is unicode:
        return obj_hash_unicode(o)
    elif type(o) is float:
        return obj_hash_float(o)
    elif type(o) is int:
        return obj_hash_int(o)
    elif type(o) is str:
        return obj_hash_unicode(unicode(o))
    elif type(o) is set or type(o) is frozenset:
        return obj_hash_set(o)
    elif type(o) is bool:
        return obj_hash_bool(o)
    elif isinstance(o, Redacted):
        return o.hash
    elif o is None:
        return hash_primitive('n', '')
    

setup(
    name = "django-stubs",
    version = "1.8.0",
    description = "Mypy stubs for Django",
    long_description = readme,
    long_description_content_type = "text/markdown",
    license = "MIT",
    url = "https://github.com/typeddjango/django-stubs",
    py_modules = [],
    python_requires = ">=3.6",
    install_requires = dependencies,
)

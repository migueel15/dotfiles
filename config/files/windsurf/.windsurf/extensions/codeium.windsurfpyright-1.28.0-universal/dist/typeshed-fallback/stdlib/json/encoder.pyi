from collections.abc import Callable, Iterator
from re import Pattern
from typing import Any, Final

ESCAPE: Final[Pattern[str]]  # undocumented
ESCAPE_ASCII: Final[Pattern[str]]  # undocumented
HAS_UTF8: Final[Pattern[bytes]]  # undocumented
ESCAPE_DCT: Final[dict[str, str]]  # undocumented
INFINITY: Final[float]  # undocumented

def py_encode_basestring(s: str) -> str: ...  # undocumented
def py_encode_basestring_ascii(s: str) -> str: ...  # undocumented
def encode_basestring(s: str, /) -> str:
    """
    encode_basestring(string) -> string

    Return a JSON representation of a Python string
    """
    ...
def encode_basestring_ascii(s: str, /) -> str:
    """
    encode_basestring_ascii(string) -> string

    Return an ASCII-only JSON representation of a Python string
    """
    ...

class JSONEncoder:
    item_separator: str
    key_separator: str

    skipkeys: bool
    ensure_ascii: bool
    check_circular: bool
    allow_nan: bool
    sort_keys: bool
    indent: int | str
    def __init__(
        self,
        *,
        skipkeys: bool = False,
        ensure_ascii: bool = True,
        check_circular: bool = True,
        allow_nan: bool = True,
        sort_keys: bool = False,
        indent: int | str | None = None,
        separators: tuple[str, str] | None = None,
        default: Callable[..., Any] | None = None,
    ) -> None: ...
    def default(self, o: Any) -> Any: ...
    def encode(self, o: Any) -> str: ...
    def iterencode(self, o: Any, _one_shot: bool = False) -> Iterator[str]: ...

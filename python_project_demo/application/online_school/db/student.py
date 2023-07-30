from typing import Optional

from pydantic import BaseModel, Field

from online_school.utils import generate_id


def generate_bag():
    pass


class Students(BaseModel):
    id: str = Field(default_factory=generate_id)
    fullName: str = Field(title='fullName')
    nickName: Optional[str] = Field(title='nickName')


class StudentBags(BaseModel):
    pass

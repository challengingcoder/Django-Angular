from django.db import models
from solo.models import SingletonModel
# Create your models here.
class Count(SingletonModel):
    value = models.IntegerField(default=2)
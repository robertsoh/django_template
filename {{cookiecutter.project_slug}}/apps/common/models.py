import uuid

from django.db import models


class TimeStampedModel(models.Model):
    created = models.DateTimeField(auto_now_add=True, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)

    class Meta:
        abstract = True


class UUIDTimeStampedModel(TimeStampedModel):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        abstract = True


class AuditableUUIDTimeStampedModel(UUIDTimeStampedModel):
    created_by = models.CharField(max_length=20, editable=False)
    modified_by = models.CharField(max_length=20, editable=False)

    class Meta:
        abstract = True


class AuditableTimeStampedModel(TimeStampedModel):
    created_by = models.CharField(max_length=20, editable=False)
    modified_by = models.CharField(max_length=20, editable=False)

    class Meta:
        abstract = True

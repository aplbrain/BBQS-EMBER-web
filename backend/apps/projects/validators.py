from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator

doi_validator = RegexValidator(
    regex=r"^10\.\d{4,9}/[-._;()/:A-Z0-9]+$", message="This field must be formatted as DOI"
)

ember_dandi_id_validator = RegexValidator(
    regex=r"EMBER-DANDI:\d{6}$", message="This field must be a valid EMBER-DANDI id"
)

year_validator = RegexValidator(regex=r"\d{4}", message="This field must be a valid year")

orcid_validator = RegexValidator(
    regex=r"^https://orcid.org/\d{4}-\d{4}-\d{4}-\d{4}$",
    message="This field must be a valid ORCID",
)


def validate_list_ember_dandi_ids(value):
    if not isinstance(value, list):
        raise ValidationError("This feld must be a list")

    for item in value:
        if not isinstance(item, str):
            raise ValidationError("All items must be strings")
        ember_dandi_id_validator(item)

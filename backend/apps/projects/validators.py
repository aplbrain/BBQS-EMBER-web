from django.core.validators import RegexValidator

doi_validator = RegexValidator(
    regex=r"^10\\.\\d{4,9}/[-._;()/:A-Z0-9]+$", message="This field must be formatted as DOI"
)

ember_dandi_id_validator = RegexValidator(
    regex=r"EMBER-DANDI:\\d{6}$", message="This field must be a valid EMBER-DANDI id"
)

year_validator = RegexValidator(regex=r"\d{4}", message="This field must be a valid year")

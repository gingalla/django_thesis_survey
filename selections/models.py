from django.db import models
from django.core.validators import MaxValueValidator

"""
Model to hold image selection data

    'selection' field will equal:
    0 if user did not select an image preference 
    1 if an image was selected

    If selection==1, the image saved in image1 will be the winner.
    image2 will be the second image used in the pairing, the losing image.
"""
class Image_pairing(models.Model):
    image_dataset = models.CharField(max_length=20, help_text='Dataset visualized by image')
    image1 = models.PositiveIntegerField(validators=[MaxValueValidator(9)])
    image2 = models.PositiveIntegerField(validators=[MaxValueValidator(9)])
    selection = models.PositiveIntegerField(validators=[MaxValueValidator(1)])

    def __str__(self):
        """String for representing the Model object (dataset) name."""
        return self.image_dataset

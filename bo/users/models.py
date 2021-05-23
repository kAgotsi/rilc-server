import os
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


# We are we define models
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, is_active=True, is_staff=False, is_admin=False):
        if not email:
            raise ValueError("Vous devez renseigner votre adresse email")
        if not password:
            raise ValueError("Vous devez renseigner votre mot de passe")
        user_obj = self.model(
            email=self.normalize_email(email)
        )
        user_obj.set_password(password)
        user_obj.admin = is_admin
        user_obj.active = is_active
        user_obj.staff = is_staff
        user_obj.save(using=self._db)
        return user_obj

    def create_superuser(self, email, password=None):
        user = self.create_user(
            email,
            password=password,
            is_admin=True,
            is_staff=True
        )
        return user


# This class is custom user class.
# Custom user class is required because we need to modify
# default login method with username by email auth


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=80, unique=True)
    is_active = models.BooleanField(default=True)
    admin = models.BooleanField(default=False)  # admin user is superuser
    is_staff = models.BooleanField(default=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'email'
    objects = UserManager()

    # Methods
    def __str__(self):
        return self.email

    def get_email(self):
        return self.email

    @property
    def is_admin(self):
        return self.admin

    @property
    def is_superuser(self):
        return self.is_admin


# Definition of a method to rename the users avatar  uploaded
def user_avatar_path(instance, filename):
    # Set the path
    upload_to = 'images/avatars/{userid}/'.format(userid=instance.id)

    # Build the filename
    # Get the extension
    ext = filename.split('.')[-1]
    # Set the filename as random string
    filename = '{}.{}'.format(uuid4().hex, ext)

    # Return the whole path to the file
    return os.path.join(upload_to, filename)


# This class contain extra informations about user
class UserProfile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="profile")

    # Attributes
    # upload at specific location
    avatar = models.FileField(upload_to=user_avatar_path, blank=True)
    surname = models.CharField(max_length=35, blank=True)
    first_name = models.CharField(max_length=35, blank=True)
    birth_day = models.DateField(blank=True)
    # we have two role where manager and staff
    MANAGER = 1
    CONTROLER = 2
    POLYVALENT = 3
    ROLE_CHOICES = (
        (MANAGER, 'Manager'),
        (CONTROLER, 'Controler'),
        (POLYVALENT, 'polyvalent'),
    )
    role = models.PositiveSmallIntegerField(
        choices=ROLE_CHOICES, blank=False, null=False)
    tel = models.CharField(max_length=10, blank=True)
    address_street = models.CharField(
        max_length=200, db_column='UserAddressStreet', blank=True)
    address_postal_code = models.CharField(
        max_length=10, db_column='UserAddressPostalCode', blank=True)
    address_city = models.CharField(
        max_length=30, db_column='UserAddressCity', blank=True)
    address_country = models.CharField(
        max_length=20, blank=True, default="France")

    def __str__(self):
        return self.first_name + " " + self.surname + ">"

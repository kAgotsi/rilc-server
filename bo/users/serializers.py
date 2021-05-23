from rest_framework.serializers import ModelSerializer
from user.models import User


# User Serializer class for our custom user
class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(many=True, read_only=True)

    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'password', 'profile')

# User profile Serializer


class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    avatar = Base64ImageField()

    class Meta:
        model = UserProfile
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at',)

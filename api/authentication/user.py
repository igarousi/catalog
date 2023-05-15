from api.authentication.fastapi_resource_server import GrantType, JwtDecodeOptions, OidcResourceServer
from api.models.user import User
from api.procedures.user import create_or_update_user
from fastapi import Security


decode_options = JwtDecodeOptions(verify_aud=False)

auth_scheme = OidcResourceServer(
    "https://auth.cuahsi.io/realms/HydroShare",
    jwt_decode_options=decode_options,
    allowed_grant_types=[GrantType.IMPLICIT]
)

async def get_current_user(claims: dict = Security(auth_scheme)) -> User:
    user = await create_or_update_user(claims["preferred_username"])
    return user